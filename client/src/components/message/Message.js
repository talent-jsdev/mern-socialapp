import './message.css'

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="http://www.paulseward.com/downloads/Avatars/cartoon_avatar.png"
        />
        <span className="messageText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </span>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
