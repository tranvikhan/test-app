import * as React from "react";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { v4 as uuidv4 } from "uuid";

import {
  FormDatePicker,
  FormInput,
  FormCheckbox,
  FormMaskedTextBox,
  FormUpload,
  FormComboBox,
  FormRadioGroup,
} from "./form-components";

import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  arrivalDateValidator,
  requiredValidator,
} from "./validators";
import { genders, positions } from "./data";
import { dataURLtoFile } from "../../helper/dataURLtoFile";
import useStore from "../../hook/mobxHook";
import { observer } from "mobx-react";
import { UserData } from "../../mobx/userStore";
import { useParams } from "react-router";

export interface UserDataForm {
  id: string;
  fullName: string;
  image: Array<Object>;
  position: Object;
  gender: string;
  birthDay: Date;
  phone: string;
  email: string;
  skype: string;
  instagram: string;
  facebook: string;
}
interface Params {
  id: string;
}
const UserForm = (props: any) => {
  const { user, addUser, editUser, getUser } = useStore();
  let { id } = useParams<Params>();
  const [userDefault, setUserDefault] = React.useState<UserDataForm>({
    id: uuidv4(),
    fullName: "",
    image: [
      {
        getRawFile: () =>
          dataURLtoFile(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAM1BMVEX////i4uLZ2dnLy8vGxsa9vb2zs7P6+vrn5+fU1NTBwcH19fXe3t64uLjQ0NDx8fHs7OyvA5BIAAAEMUlEQVR4XuzAIQEAAAgDsDc4/dPSAI3Y8hEAAAAAAAAAAAAAAAAAAAAAAAAAAECnObHs3VnS2yAQhdFGQDMJS/tfbV5SlcpDKo0t/NvoO0u4JaPLJJ9u8yHqHzH4zZ3yN6Rcqv5LLTn9DgBtD/o/YW8CyV5tfJabc1HtoiMqA+I6go4Lh9zRps/Z5HZa1WfVJvdydn1eP+VOnL7GkdUAR1YvpEVWpJX1GlnWd3S9Rj9kdanqVWqSxRW9TpG1nXqlU1aWol4pJibPdpusq+nVmizroVd78GANaDxYPFqp6wRJlrTrDLssKeoMUVZ06BwHs0K7wq/QLvIrHHDcelrIBDHoLEGWo/Ow6jfgvPGQxaDldR5/45ZF09KZGN8HnOzZ22X6+/QOT1jrT3aY8BAWYc3XdaZOJx1AWIRFWIRFWIRFWIRFWIRFWMwNCYuwOHu7zClclpUJaz72DQmL7XsW4bssJlCz7B7ULE7+cab0my5mckGT5sClgTmKzlJufY+Vu6wnL8MBjO9czpzDcxnFbmOyY3cyvtslteOTIVVnqHy3Z8piFh3eyZIOvuowoLNZYeeppHY7Sw52B0PWgM4smk9vTpG5Sm6XmBgO8BQHO/djcx2+69qTrOzBu9DuoJEOCOzb2zlK1oDKgrLdybbOgMCIZdc47zdgYyPaLkX+n4g/g5wj0EftMn10QGTp3W5nA8wusZo8wLOabOfoDXaJX+GAytqMXeGyjt3JQtYA7p8MqAxZdp6WZbex7GfnqKR2Jy9Du0R/H0BzGBBYUbbzNAe7jeZg52gOdifNwa5xxmEAzYGw5gjULMIiLMJigF9S41oFc8MZWtfn9EZxoDywfc+Ro/c6uGhodnR9Tb9PWq7rq7rjqPLfqFvJ6zV8ktXlrlfpWZbWvF7JN1lW2rpeq2+Jl6Bd35d8qqLOEVd7ulrpOk8vTZaRvc7ms6ygbVHfIW5Nvlvaq75P3b83r+a8vpv/yrzaXvVn1P2Qb5JL1J8US/6WR8rrJ/Cf/oAl94j6OeLDJflIKZeqn6eWnL4vKAKzB0Vgv9q7oxyHQRgIwyQlpqQYfP/T7uO+jqtuV23+7wgjoYEIYikoAtODIrDop32us0d5k7VX+3x1X2847rl9C79tj/9ee6zIdp9u38lfu89v282+2+1VealJkVdMt6vwGeV5bRx2Lcdo5Slr2hXNVdKi2lXV+KOoiGtVu7q6iqR1g1lv2m0zaHfl2jSIFzHXab9wLH0Jwu+JNyLYEllhSwzEQeiPJeEPfSwVzsSDGgx9pCW86U/hseuzw+GJQTi462/h0fV9A87EP3SQOOkg9CM0Nn2XhV2fN4iqT9DDkZhFhaaXIUL/PIOhH3bQ9TJE1b/PwBNliKaXIUIvQwy9DNH1MkTVyxCeKEM0vQwRehli6GWIrpchql6G8EQZopQfOGGzTauBZJgAAAAASUVORK5CYII=",
            "avatar"
          ),
      },
    ],
    position: { label: "Junior Developer", value: "Junior Developer" },
    gender: "Male",
    birthDay: new Date("01/01/2000"),
    phone: "",
    email: "",
    skype: "",
    instagram: "",
    facebook: "",
  });
  React.useEffect(() => {
    if (props.type === "edit" && id) {
      getUser(id);
    }
  }, [props.type, id]);
  const handleSubmit = (dataItem: any) => {
    let values: UserData = {
      id: uuidv4(),
      fullName: dataItem.fullName,
      position: dataItem.position.value,
      gender: dataItem.gender,
      birthDay: dataItem.birthDay,
      phone: dataItem.phone,
      email: dataItem.email,
      skype: dataItem.skype,
      instagram: dataItem.instagram,
      facebook: dataItem.facebook,
      like: 0,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAM1BMVEX////i4uLZ2dnLy8vGxsa9vb2zs7P6+vrn5+fU1NTBwcH19fXe3t64uLjQ0NDx8fHs7OyvA5BIAAAEMUlEQVR4XuzAIQEAAAgDsDc4/dPSAI3Y8hEAAAAAAAAAAAAAAAAAAAAAAAAAAECnObHs3VnS2yAQhdFGQDMJS/tfbV5SlcpDKo0t/NvoO0u4JaPLJJ9u8yHqHzH4zZ3yN6Rcqv5LLTn9DgBtD/o/YW8CyV5tfJabc1HtoiMqA+I6go4Lh9zRps/Z5HZa1WfVJvdydn1eP+VOnL7GkdUAR1YvpEVWpJX1GlnWd3S9Rj9kdanqVWqSxRW9TpG1nXqlU1aWol4pJibPdpusq+nVmizroVd78GANaDxYPFqp6wRJlrTrDLssKeoMUVZ06BwHs0K7wq/QLvIrHHDcelrIBDHoLEGWo/Ow6jfgvPGQxaDldR5/45ZF09KZGN8HnOzZ22X6+/QOT1jrT3aY8BAWYc3XdaZOJx1AWIRFWIRFWIRFWIRFWIRFWMwNCYuwOHu7zClclpUJaz72DQmL7XsW4bssJlCz7B7ULE7+cab0my5mckGT5sClgTmKzlJufY+Vu6wnL8MBjO9czpzDcxnFbmOyY3cyvtslteOTIVVnqHy3Z8piFh3eyZIOvuowoLNZYeeppHY7Sw52B0PWgM4smk9vTpG5Sm6XmBgO8BQHO/djcx2+69qTrOzBu9DuoJEOCOzb2zlK1oDKgrLdybbOgMCIZdc47zdgYyPaLkX+n4g/g5wj0EftMn10QGTp3W5nA8wusZo8wLOabOfoDXaJX+GAytqMXeGyjt3JQtYA7p8MqAxZdp6WZbex7GfnqKR2Jy9Du0R/H0BzGBBYUbbzNAe7jeZg52gOdifNwa5xxmEAzYGw5gjULMIiLMJigF9S41oFc8MZWtfn9EZxoDywfc+Ro/c6uGhodnR9Tb9PWq7rq7rjqPLfqFvJ6zV8ktXlrlfpWZbWvF7JN1lW2rpeq2+Jl6Bd35d8qqLOEVd7ulrpOk8vTZaRvc7ms6ygbVHfIW5Nvlvaq75P3b83r+a8vpv/yrzaXvVn1P2Qb5JL1J8US/6WR8rrJ/Cf/oAl94j6OeLDJflIKZeqn6eWnL4vKAKzB0Vgv9q7oxyHQRgIwyQlpqQYfP/T7uO+jqtuV23+7wgjoYEIYikoAtODIrDop32us0d5k7VX+3x1X2847rl9C79tj/9ee6zIdp9u38lfu89v282+2+1VealJkVdMt6vwGeV5bRx2Lcdo5Slr2hXNVdKi2lXV+KOoiGtVu7q6iqR1g1lv2m0zaHfl2jSIFzHXab9wLH0Jwu+JNyLYEllhSwzEQeiPJeEPfSwVzsSDGgx9pCW86U/hseuzw+GJQTi462/h0fV9A87EP3SQOOkg9CM0Nn2XhV2fN4iqT9DDkZhFhaaXIUL/PIOhH3bQ9TJE1b/PwBNliKaXIUIvQwy9DNH1MkTVyxCeKEM0vQwRehli6GWIrpchql6G8EQZopQfOGGzTauBZJgAAAAASUVORK5CYII=",
    };
    if (props.type === "new") {
      if (dataItem.image && dataItem.image[0]) {
        let file = dataItem.image[0].getRawFile();
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          addUser({ ...values, image: reader.result });
          console.log(reader.result);
        };
      } else {
        addUser(values);
      }
    }
    if (props.type === "edit" && user && id) {
      if (dataItem.image && dataItem.image[0]) {
        let file = dataItem.image[0].getRawFile();
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          editUser(id, { ...values, image: reader.result, like: user.like });
        };
      } else {
        editUser(id, { ...values, like: user.like });
      }
    }
  };

  return (
    (user || props.type === "new") && (
      <Form
        initialValues={
          user
            ? {
                ...user,

                image: [
                  {
                    getRawFile: () => dataURLtoFile(user.image, "avatar"),
                  },
                ],
                position: { label: user.position, value: user.position },
                birthDay: new Date(user.birthDay),
              }
            : userDefault
        }
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-24">
            <div>
              <h1 className="text-gray-900 text-2xl font-medium mb-4">
                Infomation
              </h1>
              <FormElement>
                <fieldset className={"k-form-fieldset"}>
                  <Field
                    id={"fullName"}
                    name={"fullName"}
                    label={"Full Name"}
                    component={FormInput}
                    validator={nameValidator}
                  />
                  <Field
                    id={"position"}
                    name={"position"}
                    label={"Position"}
                    component={FormComboBox}
                    textField={"label"}
                    data={positions}
                    validator={requiredValidator}
                  />
                  <Field
                    id={"birthDay"}
                    name={"birthDay"}
                    label={"Birth Day"}
                    component={FormDatePicker}
                    validator={arrivalDateValidator}
                  />
                  <Field
                    id={"gender"}
                    name={"gender"}
                    label={"Gender"}
                    textField={"label"}
                    layout={"horizontal"}
                    component={FormRadioGroup}
                    data={genders}
                  />

                  <Field
                    id={"image"}
                    name={"image"}
                    accept="image/png, image/gif, image/jpeg"
                    label={"Upload Photos"}
                    component={FormUpload}
                  />
                </fieldset>
              </FormElement>
            </div>
            <div>
              <h1 className="text-gray-900 text-2xl font-medium mb-4">
                Contact
              </h1>
              <FormElement>
                <fieldset className={"k-form-fieldset"}>
                  <Field
                    id={"phone"}
                    name={"phone"}
                    label={"Phone Number"}
                    mask={"0000 00 00 00"}
                    component={FormMaskedTextBox}
                    validator={phoneValidator}
                  />
                  <Field
                    id={"email"}
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    component={FormInput}
                    validator={emailValidator}
                  />
                  <Field
                    id={"skype"}
                    name={"skype"}
                    label={"skype"}
                    component={FormInput}
                  />
                  <Field
                    id={"facebook"}
                    name={"facebook"}
                    label={"Facebook"}
                    component={FormInput}
                  />
                  <Field
                    id={"instagram"}
                    name={"instagram"}
                    label={"Instagram"}
                    component={FormInput}
                  />
                  {props.type === "new" && (
                    <Field
                      id={"terms"}
                      name={"terms"}
                      label={"I agree with terms and conditions"}
                      component={FormCheckbox}
                      validator={termsValidator}
                    />
                  )}
                </fieldset>
                <fieldset className={"k-form-fieldset"}>
                  <div className="k-form-buttons flex justify-end">
                    {props.type === "new" ? (
                      <Button onClick={formRenderProps.onFormReset}>
                        Clear
                      </Button>
                    ) : (
                      <Button onClick={formRenderProps.onFormReset}>
                        Reset
                      </Button>
                    )}
                    <Button
                      primary={true}
                      type={"submit"}
                      disabled={!formRenderProps.allowSubmit}
                    >
                      {props.type === "new" ? "Add" : "Save"}
                    </Button>
                  </div>
                </fieldset>
              </FormElement>
            </div>
          </div>
        )}
      />
    )
  );
};
export default observer(UserForm);
