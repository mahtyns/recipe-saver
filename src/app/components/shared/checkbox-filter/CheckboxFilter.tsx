import type { FilterOption } from "@/app/models/filters/filters.models"

interface FilterCheckboxListProps {
  options: FilterOption[];
  selected: string[];
  onChange: (slug: string) => void;
}


const CheckboxFilter = ({ options, selected, onChange }: FilterCheckboxListProps) => (
  <div className="checkbox-list">
    {options.map(option => (
      <label className="checkbox-list__item" key={option.slug}>
        <input
          type="checkbox"
          checked={selected.includes(option.slug)}
          onChange={() => onChange(option.slug)}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default CheckboxFilter