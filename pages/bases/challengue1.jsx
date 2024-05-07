export default function challengueSpans(){
    return (
        <div>
            {[0,1,2,3,4,5,6,7,8,9,10].map(item => (
                <div>
                    <span> {item} </span>
                    <br/>
                </div>
            ))}
        </div>
    );
}