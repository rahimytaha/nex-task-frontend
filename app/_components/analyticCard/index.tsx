import { BanknoteArrowUp } from "lucide-react";

type Props = {};

const AnalyticCard = (props: Props) => {
  return (
    <div className="border-border rounded-xl justify-between items-center   bg-sidebar shadow p-4  flex       border w-64  ">
      <div>
        <h3>$30000</h3>
        <h4>Income Money</h4>
      </div>
      <BanknoteArrowUp
        className="bg-accent/80    p-2   rounded-full  "
        size={48}
      />
    </div>
  );
};

export default AnalyticCard;
