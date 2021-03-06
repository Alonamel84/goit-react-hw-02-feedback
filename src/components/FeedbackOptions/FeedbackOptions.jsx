import s from '../FeedbackOptions/FeedbackOptions.module.css';
const FeadbackOptions = ({ onLeaveFeedback, name,type}) => {
 
    
    return (
        Object.entries(name).map((( item , id)=>
        
            <button className={s.button} key={ id} onClick={onLeaveFeedback} type={type} name={item[0]} >
                    {item[0]}
          </button>    
                 
        )
        ))
}
Statistics.protoType = {
  name: ProtoType.array,
  onLeaveFeedback: ProtoType.func,
  type: ProtoType.bool,
 
}
export default FeadbackOptions;
