import { useCalculate } from '@rock-paper-scissors/hooks/useCalculate';
import useComputer from '@rock-paper-scissors/hooks/useComputer';

interface BlankComponentProps {
  name: string;
  icon?: any;
  weight?: number;
  color?: string;
}

const BlankComponent: React.FunctionComponent<BlankComponentProps> = ({
  name,
  icon,
  weight,
  color,
}) => {
  const handleClick = () => {
    const computerDecision = useComputer(['Rock', 'Paper', 'Scissors']);
    useCalculate(name, computerDecision);
  };

  return (
    <section
      className={`m-5 p-5 bg-emerald-500 rounded-full cursor-pointer hover:bg-opacity-60 hover:scale-105 transition duration-150 ease-in-out drop-shadow-xl tooltip `}
      onClick={handleClick}
    >
      {icon}
      <span className="tooltiptext">{name}</span>
    </section>
  );
};

export default BlankComponent;
