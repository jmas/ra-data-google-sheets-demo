import {
  Admin,
  Create,
  Datagrid,
  Edit,
  List,
  Resource,
  SimpleForm,
  TextField,
  TextInput,
  useEditController,
} from "react-admin";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const DevEdit = (props) => {
  const { id } = useParams();
  const { record } = useEditController({
    resource: "devs",
    id,
  });
  
  console.log({ id, record });

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
      </SimpleForm>
    </Edit>
  );
};

export const DevCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
    </SimpleForm>
  </Create>
);

export const DevList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
    </Datagrid>
  </List>
);

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Developper Time Sheet</title>
      </Helmet>
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource
          name="devs"
          list={DevList}
          edit={DevEdit}
          create={DevCreate}
        />
      </Admin>
    </>
  );
};
