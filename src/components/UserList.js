import React from 'react'
import {List, Avatar} from 'antd'
import { faker } from '@faker-js/faker';

const UserList = ({data,loading}) => {

  return (
    <div>
        <List
          dataSource={data}
          loading={loading}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={faker.image.people(640,480)} />}
                title={<p>{item.name}</p>}
                description={item.email}
              />
              <div>{item?.specialization}</div>
              <div className='ml-6'>Content</div>
            </List.Item>
          )}
        />
    </div>
  )
}

export default UserList