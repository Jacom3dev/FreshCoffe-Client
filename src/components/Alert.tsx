interface IProps {
    children: JSX.Element; // React.ReactNode | string, but we don't want to import
}

export const Alert = ({children}:IProps) => {
  return (
    <div className="text-center my-2 bg-red-600 text-white p-3 font-bold uppercase">{children}</div>
  )
}
