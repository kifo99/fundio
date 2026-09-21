import { FormField } from '../../../../components/form/FormField';

export function LoginFormFields() {
  return (
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
  );
}
