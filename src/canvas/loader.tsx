import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const getLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('theme') as string
      return value
    }
  }
  const { progress } = useProgress()
  const theme = getLocalStorage()
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: theme === 'dark' ? '#F1F1F1F1' : '#000000',
          fontWeight: 800,
          marginTop: 40
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
