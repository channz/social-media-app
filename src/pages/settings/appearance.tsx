import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "@/utils/contexts/theme";

const AppearanceSettings = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col w-full my-5 overflow--auto">
      <p className="font-semibold text-lg">Select Theme</p>
      <RadioGroup className="flex space-x-5 my-5" defaultValue="system">
        <div className="flex flex-row items-center space-x-2 w-28 p-5 rounded-lg border-solid border-2 border-black active:border-sky-500">
          <RadioGroupItem
            value="system"
            id="r1"
            onClick={() => setTheme("system")}
          />
          <Label htmlFor="r1" className="font-semibold text-md">
            System
          </Label>
        </div>
        <div className="flex flex-row items-center space-x-2 w-28 p-5 bg-black rounded-lg border-solid border-2 border-black active:border-sky-500">
          <RadioGroupItem
            value="dark"
            id="r2"
            className="bg-white"
            onClick={() => setTheme("dark")}
          />
          <Label htmlFor="r2" className="font-semibold text-md text-white">
            Dark
          </Label>
        </div>
        <div className="flex flex-row items-center space-x-2 w-28 p-5 rounded-lg border-solid border-2 border-black active:border-sky-500">
          <RadioGroupItem
            value="light"
            id="r3"
            onClick={() => setTheme("light")}
          />
          <Label htmlFor="r3" className="font-semibold text-md">
            Light
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AppearanceSettings;
