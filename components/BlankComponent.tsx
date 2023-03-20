// Hook
import { useCalculate } from "@rock-paper-scissors/hooks/useCalculate";
import useComputer from "@rock-paper-scissors/hooks/useComputer";

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
    const computerDecision = useComputer(["Rock", "Paper", "Scissors"]);
    console.log(useCalculate(computerDecision, name));
  };

  return (
    <section
      className={`p-5 bg-emerald-500 rounded-full cursor-pointer hover:bg-opacity-75`}
      onClick={handleClick}
    >
      {icon}
    </section>
  );
};

export default BlankComponent;
