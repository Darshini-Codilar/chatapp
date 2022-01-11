import { PureComponent } from "react";
import './App.scss';

class Chatapp extends PureComponent {
  render() {
    return (
      <div className="conatainer_main">
        <div className="purple_container"> </div>
        <div className="mobile_container">
          <div className="mobile_header">
          <div className="mobile_top"></div>
            <div className="mobile_user">
              <div className="user_content">
                <div className="user">
                  <img src="images/avatar.jpg" alt="" />
                  <h6>Samuel Green <br /><p>Available to Walk</p></h6>
                </div>
              </div>
            </div>
            </div>
            
            <div className="chats">
              <ul className="msgs1">
                <li>That sounds great. I’d be happy with that.</li>
                <li>
                  Could you send over some pictures of your dog, please?
                </li>
              </ul>
              <ul className="msgs2">
                <li className="dog_images">
                  <img src="images/dog-image-1.jpg" alt="dog" height="40px" />
                  <img src="images/dog-image-2.jpg" alt="dog" height="40px" />
                  <img src="images/dog-image-3.jpg" alt="dog" height="40px" />
                </li>
                <li className="msg2">
                  Here are a few pictures. She’s a happy girl!
                </li>
                <li className="msg2">
                  Can you make it?
                </li>
              </ul>
              <ul className="msgs1">
                <li>
                  She looks so happy! The time we discussed works. How long shall I take her out for?
                </li>
              </ul>
              <ul className="chat_prices">
                <li>
                  <div className="prices_content">
                    <div className="prices_circle"></div>
                    <p className="prices_text">30 minute walk</p>
                  </div>
                  <span className="price">$29</span>
                </li>
                <li>
                  <div className="prices_content">
                    <div className="prices_circle"></div>
                    <p className="prices_text"> 1 hour walk</p>
                  </div>
                  <span className="price">$49</span>
                </li>
              </ul>
                <div className="buttonSubmit">
                <input type="text" placeholder="Type a message..." />
              </div>
            

          </div>
        </div>
        <div className="simplebooking_container">
          <h2>Simple booking</h2>
          <p>Stay in touch with our dog walkers through the chat interface. This makes it easy to
            discuss arrangements and make bookings. Once the walk has been completed you can rate
            your walker and book again all through the chat.</p>
        </div>
        <div class="pink_container"></div>
      </div>
    );
  }
}
export default Chatapp;

