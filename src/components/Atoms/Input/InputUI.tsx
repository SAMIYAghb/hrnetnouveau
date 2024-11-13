import { Input, InputNumber } from "antd";
import { InputUIProps } from "../../../../types";


const InputUI: React.FC<InputUIProps> = ({name, type = "text", onChange, onBlur, value }) => {
  return  type === "number" ? (
        <InputNumber
          min={1}
          name={name}
          value={value as number}
          onChange={(val) =>
            onChange({
              target: { value: val ?? 0, name } // Valeur par défaut si null
            } as unknown as React.ChangeEvent<HTMLInputElement>)
          }
          onBlur={onBlur}
          style={{ width: "100%" }}
        />
      ) : (
        <Input 
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
      )}

export default InputUI;

// const InputUI = React.forwardRef<InputRef, InputProps>((propsAntDesign, ref) => (
//   <Input ref={ref} {...propsAntDesign} />
// ));

// forwardRef
// C'est une fonction de React qui permet de transférer une référence (ref) à un composant enfant. Cela permet à un composant parent d'accéder directement à l'élément DOM ou à l'instance du composant enfant.
// // Ici, forwardRef est utilisé pour permettre à un composant parent de passer une référence au composant Input d'Ant Design.

// InputUI est un composant personnalisé qui enveloppe le composant Input d'Ant Design. Il prend des propriétés (propsAntDesign) comme paramètres, qui représentent toutes les propriétés transmises à InputUI, et les transmet ensuite au composant Input en les décomposant avec {...propsAntDesign}.
// La référence (ref) reçue par InputUI est transférée au composant Input via ref={ref}, permettant ainsi au parent d'accéder directement à l'élément de champ de saisie.

// HTMLInputElement : Spécifie que la référence (ref) est liée à un élément DOM de type <input>.
// InputProps : Importé d'Ant Design, il définit les types des propriétés acceptées par le composant Input.
