import { useState } from "react"
import ImageUpload from "./ImageUpload"
import TextStyleConfig from "./TextStyleConfig"

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.vfs

function GeneratePDF() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [fontSize , setFontSize] = useState('12')
  const [fontColor , setFontColor] = useState('#000000')
  const [isBold , setIsBold] = useState(false)
  const [isItalic , setIsItalic] = useState(false)
  const [isJustify, setIsJustify] = useState(false)
  const [image, setImage] = useState(null)
  const [largura, setLargura] = useState('P')
  const [isCentralized, setIsCentralized] = useState(false)

  const [titleFontSize , setTitleFontSize] = useState('18')
  const [titleFontColor , setTitleFontColor] = useState('#000000')
  const [titleIsBold , setTitleIsBold] = useState(true)
  const [titleIsItalic , setTitleIsItalic] = useState(false)
  const [titleIsCentralized, setTitleIsCentralized] = useState(true)

  const generatePdf = () => {

    if (!title && !description && !image) {
      alert('Preencha ao menos um campo para gerar o PDF!')
      return
    }

    const customStyle = {
      fontSize: parseInt(fontSize),
      color: fontColor,
      bold: isBold,
      italics: isItalic,
      alignment: isJustify ? 'justify' : ''
    }

    const documentDefinition = {
      content: [
        {
          text: `${title}`,
          marginBottom: 20,
          bold: titleIsBold,
          fontSize: parseInt(titleFontSize),
          color: titleFontColor,
          italics: titleIsItalic,
          alignment: titleIsCentralized ? 'center' : ''
          
        },
        {
          text: `${description}`,
          style: 'customStyle'
        },
        image ? { 
          image, 
          width: largura === "P" ? 150 : largura === "M" ? 300 : 450, 
          marginTop: 20,
          alignment: isCentralized ? 'center' : ''
        } : {}
      ],
      styles: {
        customStyle
      }
    }

    pdfMake.createPdf(documentDefinition).download()
  }

  return (
    <div className="container">
        <label className="label">
            <p className="titleConfig">Título</p>
            <input
            placeholder="Título..."
            type="text"
            className="input bg-gray"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <TextStyleConfig
          configName='Título'
          fontSize={titleFontSize}
          setFontSize={setTitleFontSize}
          fontColor={titleFontColor}
          setFontColor={setTitleFontColor}
          isBold={titleIsBold}
          setIsBold={setTitleIsBold}
          isItalic={titleIsItalic}
          setIsItalic={setTitleIsItalic}
          justOrCenter='Centrlizar'
          isJustify={titleIsCentralized}
          setIsJustify={setTitleIsCentralized}
        />
        <label className="label">
            <p className="titleConfig">Conteúdo</p>
            <textarea
            placeholder="Escreva algo..."
            type="text"
            className="input bg-gray"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <TextStyleConfig
        configName='Conteúdo'
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontColor={fontColor}
          setFontColor={setFontColor}
          isBold={isBold}
          setIsBold={setIsBold}
          isItalic={isItalic}
          setIsItalic={setIsItalic}
          justOrCenter='Justificar'
          isJustify={isJustify}
          setIsJustify={setIsJustify}
        />
        <ImageUpload
          setImage={setImage}
          largura={largura}
          setLargura={setLargura}
          isCentralized={isCentralized}
          setIsCentralized={setIsCentralized}
        />

        <div className="buttonContainer">
        <button
          className="button"
          onClick={generatePdf}
        >Gerar PDF</button>
        </div>
    </div>
  )
}

export default GeneratePDF