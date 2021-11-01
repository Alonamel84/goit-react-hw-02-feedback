import s from './Notification.module.css';
const Notification = () => {
    return (
        <p className={s.message}>No feedback given</p>
    )
};
Notification.protoType = {
    good: ProtoType.string,
}
export default Notification;