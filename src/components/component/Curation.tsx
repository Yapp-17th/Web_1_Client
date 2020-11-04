import React from 'react';

export interface CurationProps {

  label: string;
  selected? : boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Curation: React.FC<CurationProps> = ({

  label,
  ...props
}) => {
    
    if(props.selected){
        return (
      
            <button
              type="button"
              
              style={{ 
                borderRadius : "24px",
                padding : "10px 20px", 
                border: "solid 1px rgba(0, 0, 0, 0.8)",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color : "white"
            }}
              {...props}
            >
              {label}
            </button>
          );
    }
    else{
        return (
      
            <button
              type="button"
              
              style={{ 
                borderRadius : "24px",
                padding : "10px 20px", 
                border: "solid 1px rgba(0, 0, 0, 0.8)",
                backgroundColor : "white",
                color: "#1f1f1f"
            }}
              {...props}
            >
              {label}
            </button>
          );
    }
  
};
