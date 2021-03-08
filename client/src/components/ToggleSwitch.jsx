import './ToggleSwitch.scss'; 


export default function ToggleSwitch({isToggled, onToggle}) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
};
