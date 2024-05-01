import { Resizable, ResizableHandle, ResizablePanel } from "../../ui/resizable";

const ResizableWithHandleDemo = () => {
  return (
    <Resizable class="min-h-[200px] max-w-md rounded-lg border">
      <ResizablePanel initialSize={0.3} minSize={0.2}>
        <div class="flex h-full items-center justify-center">
          <span class="font-semibold">A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel initialSize={0.7} minSize={0.2}>
        <div class="flex h-full items-center justify-center">
          <span class="font-semibold">B</span>
        </div>
      </ResizablePanel>
    </Resizable>
  );
};

export default ResizableWithHandleDemo;
