import { useNavigation } from 'react-router-dom'
import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'

const SubmitComponent = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'

  return (
    <Button className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className='flex capitalize'>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
        </span>
      ) : (
        text
      )}
    </Button>
  )
}
export default SubmitComponent
