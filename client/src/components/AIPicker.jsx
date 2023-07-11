import CustomButton from "./CustomButton"
import PropTypes from 'prop-types';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Asl AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
           <CustomButton
            type="outline"
            title="Ask AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
      
    </div>
  )
}

AIPicker.propTypes = {
  prompt: PropTypes.string, 
  setPrompt: PropTypes.func, 
  generatingImg: PropTypes.bool, 
  handleSubmit: PropTypes.func,
}


export default AIPicker