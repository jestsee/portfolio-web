import { LargeText } from './LargeText'
import { DesignItem } from './DesignItem'
import { CodeItem } from './CodeItem'

export function Portfolio() {
  return (
    <>
      <LargeText className="mb-4 text-4xl max-sm:text-2xl">
        What I am <span className="text-teal-400">working on</span>
      </LargeText>
      <p className="text-center opacity-50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        nemo blanditiis cum fugit doloribus tempora accusamus.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DesignItem
          img="https://skspace.sgp1.cdn.digitaloceanspaces.com/webAssets/track-cover/golang.jpg"
          description="asd"
          title="asd"
          tools="asd"
        />
        <CodeItem
          title="Time to Have More Fun"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quos."
          tools="Photoshop - Illustrator"
        />
      </div>
    </>
  )
}
