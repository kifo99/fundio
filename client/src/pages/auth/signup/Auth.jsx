import { Form } from './components/Form/Form';
import { FormField } from '../../../components/form/FormField';
import { AuthBackground } from './components/AuthBackground';
import { AuthButton } from './components/AuthButton';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Auth() {
  const [mode, setMode] = useState('login');
  const bgImgUrl = '../../../../public/img/auth-images/jonny-gios-iGZCr_1uZFQ-unsplash.jpg';

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 m-auto">
      <AuthBackground url={bgImgUrl} />
      <div className="relative h-auto w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-[520px] overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            {mode === 'login' ? (
              <motion.div
                key="login"
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-col justify-center items-center"
              >
                <Form
                  className={
                    'flex flex-col p-6 w-full h-auto justify-center items-center text-[#EDE7D9]'
                  }
                >
                  <div className="m-3.5">
                    <h1 className="uppercase text-3xl font-bold">Login</h1>
                  </div>
                  <FormField
                    field={'email'}
                    placeholder={'Email'}
                    label={'Enter your email address'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                  <FormField
                    field={'password'}
                    placeholder={'Password'}
                    label={'Enter your password'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                </Form>

                <AuthButton
                  className={`w-2/4 text-2xl font-bold h-12 text-white bg-green-500 rounded-full uppercase mt-4`}
                  type={'LOGIN'}
                />

                <button onClick={() => setMode('signup')} className="mt-4">
                  Don't have an account? Create one
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-col justify-center items-center"
              >
                <Form
                  className={
                    'flex flex-col p-6 w-full h-auto justify-center items-center text-[#EDE7D9]'
                  }
                >
                  <div className="m-3.5">
                    <h1 className="uppercase text-3xl font-bold">Create Account</h1>
                  </div>
                  <FormField
                    field={'firstName'}
                    placeholder={'First Name'}
                    label={'Enter your first name'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                  <FormField
                    field={'lastName'}
                    placeholder={'Last Name'}
                    label={'Enter your last name'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                  <FormField
                    field={'email'}
                    placeholder={'Email'}
                    label={'Enter your email address'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                  <FormField
                    field={'password'}
                    placeholder={'Password'}
                    label={'Enter your password'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                  <FormField
                    field={'confirmPassword'}
                    placeholder={'Confirm Password'}
                    label={'Confirm Password'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-12 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 m-2'
                    }
                  />
                </Form>

                <AuthButton
                  className={`w-2/4 text-2xl font-bold h-12 text-white bg-red-500 rounded-full uppercase mt-2`}
                  type={'Signup'}
                />

                <button onClick={() => setMode('login')} className="mt-4">
                  Already have an account? Login
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
