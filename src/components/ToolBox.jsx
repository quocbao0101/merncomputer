import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function ToolBox({ name, data }) {
  return (
    <div className='mt-8'>
        <div className='flex flex-col'>
            <div className='font-bold text-black text-xl'>
                {name}
            </div>
            <div className='grid grid-cols-2'>
                {data.map((pro, index) => 
                    (
                        <div key={[index]}>
                            <FormControlLabel
                                label={pro}
                                control={<Checkbox />}
                            >
                            </FormControlLabel>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default ToolBox