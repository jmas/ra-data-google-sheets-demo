import { googleAuthProvider, LoginButton } from "ra-auth-google";
import {
  Admin,
  bwDarkTheme,
  bwLightTheme,
  Create,
  Datagrid,
  Edit,
  List,
  ListGuesser,
  Login,
  ReferenceField,
  ReferenceInput,
  Resource,
  ShowGuesser,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import { Helmet } from "react-helmet";
import { dataProvider } from "./dataProvider";

const authProvider = googleAuthProvider();

const LoginPage = () => (
  <Login>
    <LoginButton theme="filled_black" />
  </Login>
);

export const DevEdit = (props: object) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextField source="id" />
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
        theme={bwLightTheme}
        darkTheme={bwDarkTheme}
        loginPage={LoginPage}
      >
        <Resource
          name="devs"
          list={DevList}
          edit={DevEdit}
          create={DevCreate}
        />
        <Resource name="projects" list={ListGuesser} show={ShowGuesser} />
      </Admin>
    </>
  );
};
