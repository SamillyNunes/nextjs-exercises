export default function LotteryNumberDisplay({number}){
    return (
        <div style={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "2rem",
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            margin: "10px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }} >
            {number}
        </div>
    );
}