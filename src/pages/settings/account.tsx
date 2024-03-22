import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from "@/utils/apis/user/api";
import { User } from "@/utils/apis/user/type";
import { SquarePen } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AccountSettings = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<User>();
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hp, setHp] = useState("");
  // const [picture, setPicture] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data } = await getUserProfile();

      setData(data);
      setName(data.nama);
      setEmail(data.email);
      setPassword(data.password);
      setHp(data.hp);
      // setPicture(data.picture!);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      email,
      nama,
      password,
      hp,
      // picture,
    };

    try {
      const result = await updateUserProfile(body);
      toast(result.message);
      navigate("/settings");
    } catch (error) {
      toast((error as Error).message);
    }
  }

  async function handleDelete(email: string) {
    try {
      const result = await deleteUser(email);
      toast(result.message);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      toast((error as Error).message);
    }
  }

  return (
    <div className="w-full flex flex-col overflow-auto">
      {data ? (
        <form action="" className="w-96" onSubmit={onSubmit}>
          <div className="flex mx-5 my-5">
            <Avatar className="w-28 h-28">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Input
              className="flex gap-5 mx-8 my-auto font-semibold text-lg"
              placeholder="Change Avatar"
              type="file"
              name="picture"
            />
            <SquarePen className="w-5 h-5 my-auto" />
          </div>
          <div className="flex flex-col mx-5 mb-10 space-y-4">
            <Input
              placeholder="Name"
              name="nama"
              required
              value={nama}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Phone number"
              name="hp"
              type="tel"
              required
              value={hp}
              onChange={(e) => setHp(e.target.value)}
            />
            <div className="flex mt-20">
              <Button type="submit" className="w-32 hover:bg-slate-700">
                Save Changes
              </Button>
            </div>
          </div>
          <Separator />
          <div className="mx-5 mt-12">
            <Button
              onClick={() => handleDelete(email)}
              className="bg-transparent hover:bg-transparent p-0 text-red-500 font-semibold text-lg"
            >
              Delete Account
            </Button>
          </div>
        </form>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default AccountSettings;
