import React, {useState, useEffect, useLayoutEffect} from 'react';

const Header = props => {

  const [scrolled, setScrolled] = useState(false)
  const [scrolledLayout, setScrolledLayout] = useState(false)

  useEffect(() => {
    console.log(">>>> useEffect");

    const handleScroll = e => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    console.log(">>>> useLayoutEffect");

    const handleScroll = e => {
      setScrolledLayout(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`Header ${scrolledLayout ? "Header--scrolledLayout" : ""} ${scrolled ? "Header--scrolled" : ""}`}>
      Header
    </header>
  );
}

export default Header;
