function PagePlaceholder({ title }) {
  return (
    <section className="px-margin-mobile lg:px-margin-desktop py-16">
      <h1 className="font-headline-lg text-headline-lg text-on-surface">{title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl">
        This page is coming soon. Content will live here.
      </p>
    </section>
  )
}

export default PagePlaceholder
