import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { MilestoneList } from "./milestone/MilestoneList";
import { MilestoneCreate } from "./milestone/MilestoneCreate";
import { MilestoneEdit } from "./milestone/MilestoneEdit";
import { MilestoneShow } from "./milestone/MilestoneShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"GoalSettingService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Milestone"
          list={MilestoneList}
          edit={MilestoneEdit}
          create={MilestoneCreate}
          show={MilestoneShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
