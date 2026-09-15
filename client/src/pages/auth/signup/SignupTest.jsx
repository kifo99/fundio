import { SignupForm } from './components/Form/SignupForm';

export function SignupTest() {
  // AuthForm component <
  //    FormField <
  //      Label
  //      input
  //      ErrorMessage component
  //    >
  //
  // >

  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center h-auto m-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 m-auto">
      <SignupForm />
      <div className="flex flex-col m-auto p-10 w-1/2 justify-center items-center">
        <h1>Welcome</h1>
        <div>
          <p>
            Exercitation consectetur velit ex sit. Aliqua proident Lorem duis velit cillum tempor
            esse Lorem do quis anim enim officia nisi. Sunt exercitation nulla consectetur nulla.
            Officia amet laborum magna incididunt consectetur ad aute adipisicing aute enim ut culpa
            qui. Aute consectetur est est enim do do consectetur officia. Amet voluptate nulla Lorem
            ipsum elit. Velit adipisicing nisi enim fugiat.
          </p>
        </div>
      </div>
    </div>
  );
}
