import React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Button } from 'antd'

const Mobxs = ({ user }) => (
  <Card title="User">
    <h1>{user.name}: {user.age}</h1>
    <Button onClick={() => user.changeAge(++user.age)}>18变</Button>
  </Card>
)
export default inject('user')(observer(Mobxs));