import React, { createContext, RefObject, useState } from 'react';

type IRefs = {
  intro: null | RefObject<HTMLDivElement>;
  about: null | RefObject<HTMLDivElement>;
  skills: null | RefObject<HTMLDivElement>;
  career: null | RefObject<HTMLDivElement>;
  portfolio: null | RefObject<HTMLDivElement>;
  contact: null | RefObject<HTMLDivElement>;
};

type IRefsContext = IRefs & {
  setIntro: (refer: RefObject<HTMLDivElement>) => void;
  setAbout: (refer: RefObject<HTMLDivElement>) => void;
  setSkills: (refer: RefObject<HTMLDivElement>) => void;
  setCareer: (refer: RefObject<HTMLDivElement>) => void;
  setPortfolio: (refer: RefObject<HTMLDivElement>) => void;
  setContact: (refer: RefObject<HTMLDivElement>) => void;
};

export const RefsContext = createContext<IRefsContext | undefined>(undefined);

export const RefsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialRefs = {
    intro: null,
    about: null,
    skills: null,
    career: null,
    portfolio: null,
    contact: null,
  };

  const [refs, setRefs] = useState<IRefs>(initialRefs);

  const setIntro = (refer: RefObject<HTMLDivElement>) =>
    setRefs((values) => ({ ...values, intro: refer }));

  const setAbout = (refer: RefObject<HTMLDivElement>) =>
    setRefs((values) => ({ ...values, about: refer }));

  const setSkills = (refer: RefObject<HTMLDivElement>) =>
    setRefs((values) => ({ ...values, skills: refer }));

  const setCareer = (refer: RefObject<HTMLDivElement>) =>
    setRefs((values) => ({ ...values, career: refer }));

  const setPortfolio = (refer: RefObject<HTMLDivElement>) =>
    setRefs((values) => ({ ...values, portfolio: refer }));

  const setContact = (refer: RefObject<HTMLDivElement>) =>
    setRefs((values) => ({ ...values, contact: refer }));

  return (
    <RefsContext.Provider
      value={{ ...refs, setIntro, setAbout, setSkills, setCareer, setPortfolio, setContact }}
    >
      {children}
    </RefsContext.Provider>
  );
};
