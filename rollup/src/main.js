import { version } from '../package.json';
import React, { memo } from 'react'

export default function () {
  const a = 'vison';
  const arr = a.split('').map(res => res+'123');
  console.log('version ' + version, arr);
  console.log(memo);
}