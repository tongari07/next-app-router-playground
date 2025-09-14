import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

function HelloWorld() {
  return <h1>Hello World</h1>
}

describe('Sample Test', () => {
  it('renders hello world', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('basic math works', () => {
    expect(2 + 2).toBe(4)
  })
})