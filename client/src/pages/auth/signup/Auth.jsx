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
                <Form
                  className={
                    'flex flex-col p-6 w-full h-full justify-normal bg-white items-center text-[#EDE7D9]'
                  }
                >
                  <div className="flex flex-col justify-center items-center mt-12 mb-8 text-green-500">
                    <h1 className="text-3xl font-bolder">Welcome back!</h1>
                    <h2 className="font-bold">Login to continue to your account.</h2>
                  </div>
                  <FormField
                    field={'email'}
                    placeholder={'Email'}
                    inputStyle={
                      'w-full h-14 pl-4 rounded-full shadow-gray-500 shadow-lg bg-gray-200 text-lg text-gray-900 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent focus:shadow-lg'
                    }
                    className={'items-center w-full h-auto sm:h-16 m-4 rounded-full '}
                  />
                  <FormField
                    field={'password'}
                    placeholder={'Password'}
                    inputStyle={
                      'w-full h-14 pl-4 rounded-full shadow-gray-500 shadow-lg bg-gray-200 text-lg text-gray-900 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent focus:shadow-lg'
                    }
                    className={
                      'items-center w-full h-auto sm:h-16 m-4 rounded-full shadow-gray-500 shadow-lg bg-gray-200 text-lg text-gray-900 '
                    }
                  />

                  <AuthButton
                    className={
                      'w-2/3 bg-gradient-to-r  from-cyan-400 to-green-500 rounded-full h-14 mt-10 font-bold text-2xl shadow-green-300 shadow-lg'
                    }
                    type={'Login'}
                  />

                  <span className="text-gray-900 text-lg mt-12">
                    Create account!{' '}
                    <button
                      className="italic text-xl text-green-600"
                      onClick={() => setMode('signup')}
                    >
                      Signup
                    </button>
                  </span>
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
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-16 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 mt-4 mb-8'
                    }
                  />
                  <FormField
                    field={'lastName'}
                    placeholder={'Last Name'}
                    label={'Enter your last name'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-16 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 mt-4 mb-8'
                    }
                  />
                  <FormField
                    field={'email'}
                    placeholder={'Email'}
                    label={'Enter your email address'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-16 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 mt-4 mb-8'
                    }
                  />
                  <FormField
                    field={'password'}
                    placeholder={'Password'}
                    label={'Enter your password'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-16 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 mt-4 mb-8'
                    }
                  />
                  <FormField
                    field={'confirmPassword'}
                    placeholder={'Confirm Password'}
                    label={'Confirm Password'}
                    inputStyle={'bg-[#6F6482] rounded-full w-full h-16 pl-4'}
                    className={
                      'flex flex-col justify-center items-center w-full h-auto sm:h-16 mt-4 mb-8'
                    }
                  />
                </Form>

                <AuthButton
                  className={`w-2/4 text-2xl font-bold h-16 text-white bg-red-500 rounded-full uppercase mt-8`}
                  type={'Signup'}
                />

                <button onClick={() => setMode('login')} className="mt-8 text-blue-400">
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
