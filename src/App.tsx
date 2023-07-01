import "./App.css";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <div>
        <p className="font-sm mb-2">
          <code>{`<Input />`}</code>
        </p>
        <Input placeholder="Placeholder" label="Label" name="placeholder" />
      </div>
      <div className="mt-4">
        <p className="font-sm mb-2">
          <code>{`<Input error />`}</code>
        </p>
        <Input
          placeholder="Placeholder"
          label="Label"
          name="placeholder"
          error
        />
      </div>
      <div className="mt-4">
        <p className="font-sm mb-2">
          <code>{`<Input disabled />`}</code>
        </p>
        <Input
          placeholder="Placeholder"
          label="Label"
          name="placeholder"
          disabled
        />
      </div>
      <div className="mt-4">
        <p className="font-sm mb-2">
          <code>{`<Input helperText=”Some interesting text” />`}</code>
        </p>
        <div className="grid-container--fit">
          <div>
            <Input
              placeholder="Placeholder"
              label="Label"
              name="placeholder"
              helperText="Some interesting text"
            />
          </div>
          <div>
            <Input
              placeholder="Placeholder"
              label="Label"
              name="placeholder"
              helperText="Some interesting text"
              error
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid-container--fit">
          <div>
            <p className="font-sm mb-2">
              <code>{`<Input startIcon />`}</code>
            </p>
            <Input
              placeholder="Placeholder"
              label="Label"
              name="placeholder"
              startIcon="call"
            />
          </div>
          <div>
            <p className="font-sm mb-2">
              <code>{`<Input endIcon />`}</code>
            </p>
            <Input
              placeholder="Placeholder"
              label="Label"
              name="placeholder"
              endIcon="lock"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-sm mb-2">
          <code>{`<Input value="Text" />`}</code>
        </p>
        <Input
          placeholder="Placeholder"
          label="Label"
          name="placeholder"
          value="Text"
        />
      </div>
      <div className="mt-4">
        <div className="grid-container--fit">
          <div>
            <p className="font-sm mb-2">
              <code>{`<Input size="sm" />`}</code>
            </p>
            <Input
              placeholder="Placeholder"
              label="Label"
              name="placeholder"
              size="sm"
            />
          </div>
          <div>
            <p className="font-sm mb-2">
              <code>{`<Input size="md" />`}</code>
            </p>
            <Input
              placeholder="Placeholder"
              label="Label"
              name="placeholder"
              size="md"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-sm mb-2">
          <code>{`<Input fullWidth />`}</code>
        </p>
        <Input
          placeholder="Placeholder"
          label="Label"
          name="placeholder"
          fullWidth
        />
      </div>
      <div className="mt-4">
        <p className="font-sm mb-2">
          <code>{`<Input multiline row="4" />`}</code>
        </p>
        <Input
          placeholder="Placeholder"
          label="Label"
          name="placeholder"
          multiline
          row={4}
        />
      </div>
    </div>
  );
}

export default App;
