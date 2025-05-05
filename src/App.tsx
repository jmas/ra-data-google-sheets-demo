import {
  Admin,
  Create,
  Datagrid,
  Edit,
  EditGuesser,
  List,
  ReferenceField,
  ReferenceInput,
  Resource,
  ShowGuesser,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import { Helmet } from "react-helmet";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { softDarkTheme, softLightTheme } from "./softTheme";

export const DevEdit = (props: object) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <ReferenceInput source="project_id" reference="projects" />
      </SimpleForm>
    </Edit>
  );
};

export const DevCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <ReferenceInput source="project_id" reference="projects" />
    </SimpleForm>
  </Create>
);

export const DevList = (props: object) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <ReferenceField
        label="Project"
        source="project_id"
        reference="projects"
        link="show"
      >
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const ProjectList = (props: object) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <FunctionField
        label="Devs count"
        source="id"
        render={(record) => (
          <Count resource="devs" filter={{ project_id: record.id }} />
        )}
      /> */}
    </Datagrid>
  </List>
);

export const ProjectCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Developer Time Sheet</title>
      </Helmet>
      <Admin
        disableTelemetry
        authProvider={authProvider}
        dataProvider={dataProvider}
        theme={softLightTheme}
        darkTheme={softDarkTheme}
      >
        <Resource
          name="devs"
          list={DevList}
          edit={DevEdit}
          create={DevCreate}
        />
        <Resource
          name="projects"
          list={ProjectList}
          show={ShowGuesser}
          edit={EditGuesser}
          create={ProjectCreate}
        />
      </Admin>
    </>
  );
};
