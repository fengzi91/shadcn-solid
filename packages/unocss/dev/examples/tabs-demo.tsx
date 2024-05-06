import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { TextField, TextFieldLabel, TextFieldRoot } from "../../ui/textfield";

const TabsDemo = () => {
  return (
    <Tabs defaultValue="account" class="w-[400px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <TextFieldRoot class="space-y-1">
              <TextFieldLabel>Name</TextFieldLabel>
              <TextField />
            </TextFieldRoot>
            <TextFieldRoot class="space-y-1">
              <TextFieldLabel>Username</TextFieldLabel>
              <TextField />
            </TextFieldRoot>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <TextFieldRoot class="space-y-1">
              <TextFieldLabel>Current password</TextFieldLabel>
              <TextField />
            </TextFieldRoot>
            <TextFieldRoot class="space-y-1">
              <TextFieldLabel>New password</TextFieldLabel>
              <TextField />
            </TextFieldRoot>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsDemo;
