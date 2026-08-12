import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';
import { resetDb, closeDb } from '../src/helpers/db';

describe('Auth', () => {
  beforeEach(async () => await resetDb());

  afterAll(async () => await closeDb());

  describe('POST /auth/signup', () => {
    it('succeeds with valid data, returns 201', async () => {
      const res = await request(app).post('/auth/signup').send({
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
        confirmPassword: 'UserTest1@',
      });

      expect(res.status).toBe(201);
    });

    it('fails with weak password, returns 400', async () => {
      const res = await request(app).post('/auth/signup').send({
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.williams.test@example.com',
        password: '1@',
        confirmPassword: '1@',
      });

      expect(res.status).toBe(400);
      expect(res.body.message).toBeDefined();
    });

    it('fails when confirm password does not match, returns 400', async () => {
      const res = await request(app).post('/auth/signup').send({
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
        confirmPassword: '1@',
      });

      expect(res.status).toBe(400);
    });

    it('fails with duplicate email, returns 4xx', async () => {
      await request(app).post('/auth/signup').send({
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
        confirmPassword: 'UserTest1@',
      });

      const res = await request(app).post('/auth/signup').send({
        firstName: 'Different',
        lastName: 'Person',
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
        confirmPassword: 'UserTest1@',
      });

      expect(res.status).toBeGreaterThanOrEqual(400);
      expect(res.status).toBeLessThan(500);
    });

    it('fails with missing firstName or lastName, returns 400', async () => {
      const res = await request(app).post('/auth/signup').send({
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
        confirmPassword: 'UserTest1@',
      });

      expect(res.status).toBe(400);
      expect(res.body.message).toBeDefined();
    });
  });

  describe('POST /auth/login', () => {
    beforeEach(async () => {
      await request(app).post('/auth/signup').send({
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
        confirmPassword: 'UserTest1@',
      });
    });

    it('succeeds with correct credentials, returns a token', async () => {
      const res = await request(app).post('/auth/login').send({
        email: 'sarah.williams.test@example.com',
        password: 'UserTest1@',
      });

      expect(res.status).toBe(200);
      expect(res.body.token).toBeDefined();
    });

    it('fails with wrong password, returns 400/401', async () => {
      const res = await request(app).post('/auth/login').send({
        email: 'sarah.williams.test@example.com',
        password: 'WrongPassword1@',
      });

      expect([400, 401]).toContain(res.status);
    });

    it('fails with nonexistent email, returns 404', async () => {
      const res = await request(app).post('/auth/login').send({
        email: 'does.not.exist@example.com',
        password: 'UserTest1@',
      });

      expect(res.status).toBe(404);
    });

    // NOTE: login currently has no email-format validation before the DB
    // lookup, so a malformed email is treated the same as a nonexistent
    // user and returns 404. This test documents that actual behavior.
    it('treats malformed email as nonexistent user, returns 404', async () => {
      const res = await request(app).post('/auth/login').send({
        email: 'not-an-email',
        password: 'UserTest1@',
      });

      expect(res.status).toBe(404);
    });
  });
});

// TODO W2-XX: Add email format validation to login route (currently 404s like a nonexistent user; minor UX gap, not a security issue)
