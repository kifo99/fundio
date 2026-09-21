import { Form } from '../../../components/form/Form';
import { FormField } from '../../../components/form/FormField';
import { AuthBackground } from './components/AuthBackground';
import { AuthButton } from './components/AuthButton';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Auth() {
  const [mode, setMode] = useState('login');
  const bgImgUrl = '../../../../public/img/auth-images/jonny-gios-iGZCr_1uZFQ-unsplash.jpg';

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-dvh w-full sm:w-2/3 md:w-1/2 lg:w-1/2 m-auto">
      <AuthBackground url={bgImgUrl} />
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full sm:w-2/3 md:w-1/2 lg:w-1/3 overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {mode === 'login' ? (
              <motion.div
                key="login"
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0 h-full flex flex-col justify-normal items-center"
              >
                <Form className="flex flex-col p-6 w-full h-full bg-[#FAF8F4] items-center text-[#1C1D1B]">
                  <div className="flex flex-col justify-center items-center mt-12 mb-8">
                    <h1 className="text-3xl font-bolder">Welcome back!</h1>
                    <h2 className="font-bold">Login to continue to your account.</h2>
                  </div>

                  <div className="flex flex-col w-full gap-4">
                    <FormField
                      field={'email'}
                      placeholder={'Email'}
                      inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
                      className="w-full"
                    />
                    <FormField
                      field={'password'}
                      placeholder={'Password'}
                      inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
                      className="w-full"
                    />
                  </div>

                  <AuthButton
                    className="w-full bg-[#3D5A45] hover:bg-[#324A39] transition-colors rounded-xl h-14 mt-8 font-medium text-lg text-white"
                    type={'Login'}
                  />

                  <span className="text-[#6B6B63] text-base mt-12">
                    Create account!{' '}
                    <button
                      className="text-[#3D5A45] font-medium underline underline-offset-2"
                      onClick={() => setMode('signup')}
                    >
                      Signup
                    </button>
                  </span>

                  <div className="flex flex-col items-center w-full mt-10">
                    <div className="flex items-center w-full gap-3 mb-6">
                      <div className="h-px flex-1 bg-[#E8E4DA]" />
                      <span className="text-sm text-[#6B6B63]">or continue with</span>
                      <div className="h-px flex-1 bg-[#E8E4DA]" />
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full h-12 rounded-xl border border-[#E8E4DA] bg-white hover:bg-[#F4F1EA] transition-colors">
                      <img src="/img/icons/icons8-google-48.png" alt="Google" className="w-5 h-5" />
                      <span className="text-[#1C1D1B] font-medium">Google</span>
                    </button>
                  </div>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0 h-full flex flex-col justify-center items-center"
              >
                <Form className="flex flex-col p-6 w-full h-full bg-[#FAF8F4] items-center text-[#1C1D1B]">
                  <div className="flex flex-col justify-center items-center mt-12 mb-8">
                    <h1 className="text-3xl font-bolder">Create an account!!</h1>
                  </div>

                  <div className="flex flex-col w-full gap-4">
                    <div className="flex w-full">
                      <FormField
                        field={'firstName'}
                        placeholder={'First name'}
                        inputStyle="w-full h-14 px-4 rounded-l-lg border border-r-0 border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] focus:z-10 transition-colors"
                        className="w-1/2"
                      />
                      <FormField
                        field={'lastName'}
                        placeholder={'Last name'}
                        inputStyle="w-full h-14 px-4 rounded-r-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] focus:z-10 transition-colors"
                        className="w-1/2"
                      />
                    </div>
                    <FormField
                      field={'email'}
                      placeholder={'Email'}
                      inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
                      className="w-full"
                    />
                    <FormField
                      field={'password'}
                      placeholder={'Password'}
                      inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
                      className="w-full"
                    />
                    <FormField
                      field={'confirmPassword'}
                      placeholder={'Confirm password'}
                      inputStyle="w-full h-14 px-4 rounded-lg border border-[#E8E4DA] bg-white text-lg outline-none focus:border-[#3D5A45] focus:ring-1 focus:ring-[#3D5A45] transition-colors"
                      className="w-full"
                    />
                  </div>

                  <AuthButton
                    className="w-full bg-[#3D5A45] hover:bg-[#324A39] transition-colors rounded-xl h-14 mt-8 font-medium text-lg text-white"
                    type={'Signup'}
                  />

                  <span className="text-[#6B6B63] text-base mt-12">
                    Already have an account?{' '}
                    <button
                      className="text-[#3D5A45] font-medium underline underline-offset-2"
                      onClick={() => setMode('login')}
                    >
                      Login
                    </button>
                  </span>

                  <div className="flex flex-col items-center w-full mt-10">
                    <div className="flex items-center w-full gap-3 mb-6">
                      <div className="h-px flex-1 bg-[#E8E4DA]" />
                      <span className="text-sm text-[#6B6B63]">or continue with</span>
                      <div className="h-px flex-1 bg-[#E8E4DA]" />
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full h-12 rounded-xl border border-[#E8E4DA] bg-white hover:bg-[#F4F1EA] transition-colors">
                      <img src="/img/icons/icons8-google-48.png" alt="Google" className="w-5 h-5" />
                      <span className="text-[#1C1D1B] font-medium">Google</span>
                    </button>
                  </div>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
