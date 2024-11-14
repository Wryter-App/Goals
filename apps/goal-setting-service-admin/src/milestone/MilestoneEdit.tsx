import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GoalTitle } from "../goal/GoalTitle";
import { TaskTitle } from "../task/TaskTitle";

export const MilestoneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput source="goal.id" reference="Goal" label="Goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="tasks" reference="Task">
          <SelectArrayInput
            optionText={TaskTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
