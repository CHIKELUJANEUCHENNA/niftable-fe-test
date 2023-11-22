
interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="w-full pt-8 md:px-8 px-4 overflow-hidden">
        {children}
    </div>
  )
}

export default Container