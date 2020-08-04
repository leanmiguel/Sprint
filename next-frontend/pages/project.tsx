import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Everest from '../mockdata/Everest.json';
import Nextday from '../components/nextday';
import Upcoming from '../components/upcoming';
import NextMeeting from '../components/nextmeeting';

const Page = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const PageContent = styled.div`
  justify-self: end;
  display: flex;
  height: 1080px;
  width: 100%;
`;

const Header = styled.h1`
  font-family: Rabbid Highway;
  font-size: 72px;
  line-height: 1.1;
  margin: 0;
`;
const Nav = styled.nav`
  margin-top: 30px;
  height: 95px;
  grid-area: 1 / 2 / 2 / 3;
  justify-self: center;
`;

const SideBar = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dbdbdb;
  grid-area: 1 / 1 / 3 / 2;
`;
const NextDays = styled.div`
  width: 33%;
  font-family: Rabbid Highway;
  margin-left: 20px;
  margin-right: 20px;
`;
const UpcomingTasks = styled.div`
  width: 33%;
  font-family: Rabbid Highway;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const NextMeet = styled.div`
  height: 280px;
  width: 33%;
  font-family: Rabbid Highway;
  background: #f6f6f6;
  padding: 20px;
  margin-top: 180px;
  border-radius: 6px;
  margin-right: 20px;
`;
const TitleContainer = styled.h2`
  text-align: center;
`;

class Task {
  task: string;
  done: boolean;
}

class Day {
  title: string;
  day: string;
  date: number;
}
class meeting {
  title: string;
  desc: string;
  start: string;
  duration: string;
}
class projectData {
  title: string;
  next_7days: Array<Day>;
  upcoming_tasks: Array<Task>;
  next_meeting: meeting;
}

const project = () => {
  let data = Object.assign(new projectData(), Everest);
  return (
    <>
      <Head>
        <title>Sprint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Nav>
          <Header>{data.title}</Header>
        </Nav>
        <SideBar />
        <PageContent>
          <NextDays>
            <TitleContainer>Next 7 Days</TitleContainer>
            {data.next_7days.map((day) => Nextday(day.day, day.date, day.title))}
          </NextDays>
          <UpcomingTasks>
            <TitleContainer>Upcoming Tasks</TitleContainer>
            {data.upcoming_tasks.map((task) => Upcoming(task.task, task.done))}
          </UpcomingTasks>
          <NextMeet>
            {NextMeeting(
              data.next_meeting.title,
              data.next_meeting.desc,
              data.next_meeting.start,
              data.next_meeting.duration
            )}
          </NextMeet>
        </PageContent>
      </Page>
    </>
  );
};

export default project;
