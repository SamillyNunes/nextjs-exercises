import OnlyEven from "../../components/OnlyEven";

export default function Conditional1(){
    return (
        <div>
            <OnlyEven value={1} />
            <OnlyEven value={2} />
            <OnlyEven value={3} />
            <OnlyEven value={4} />
            <OnlyEven value={5} />
            <OnlyEven value={6} />
        </div>
    );
}