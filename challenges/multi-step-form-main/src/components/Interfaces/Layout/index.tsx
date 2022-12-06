import React from 'react';
import { Header } from '../Atoms/Header';
import style from './style.module.css';

export function Layout({children}: {children : React.ReactNode}){
  return (<main className={style.main}>
    <Header>
      as
    </Header>
    {children}
  </main>)
}