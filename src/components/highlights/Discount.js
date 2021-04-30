import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import MyButton from '../utils/MyButton';

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart(prevCount => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart(prevCount => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={inView => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              dolor, asperiores reiciendis nostrum sint in. Error nihil
              distinctio eos dolorum perferendis fugiat corporis! Beatae tempora
              necessitatibus hic quisquam expedita optio?
            </p>

            <MyButton
              text="Purchase Ticket"
              link="http://google.com"
              size="small"
              style={{ background: '#ffa800', color: '#ffffff' }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;