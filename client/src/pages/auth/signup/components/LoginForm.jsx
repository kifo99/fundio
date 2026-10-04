import { Form } from '../../../../components/form/Form';
import { AuthButton } from './AuthButton';
import { LoginFormFields } from './LoginFormFields';
import { SocialAuth } from './SocialAuth.jsx';
import { useLogin } from '../../../../queries/auth.queries.js';

export function LoginForm({ className, onSetUserInput, onSetMode = null }) {
  const login = useLogin();

  return (
    <Form className={className} mutation={login} onSetUserInput={onSetUserInput}>
      <div className="flex flex-col justify-center items-center mt-12 mb-8">
        <h1 className="text-3xl font-bolder">Welcome back!</h1>
        <h2 className="font-bold">Login to continue to your account.</h2>
      </div>

      <LoginFormFields />

      <AuthButton
        className="w-full bg-[#3D5A45] hover:bg-[#324A39] transition-colors rounded-xl h-14 mt-8 font-medium text-lg text-white"
        type={'Login'}
      />

      <span className="text-[#6B6B63] text-base mt-12">
        Create account!{' '}
        <button
          className="text-[#3D5A45] font-medium underline underline-offset-2"
          onClick={() => onSetMode('signup')}
        >
          Signup
        </button>
      </span>

      <SocialAuth />
    </Form>
  );
}
