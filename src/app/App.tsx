import React, {Suspense} from 'react';
import {bem} from "@/shared/lib/bem";
import {withTheme} from "@/app/providers/ThemeProvider/ui/withTheme";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import { Navbar } from "@/widgets/Navbar";
import {AppRouter} from "@/app/providers/router";
import {ScrollToTopButton} from "@/features/ScrollToTopButton";

const b = bem('app');


function App() {
  const { theme } = useTheme();

  return (
    <div className={b('', {}, [theme])}>
      <Suspense fallback="...loading">
        <Navbar/>
        <AppRouter/>
        <ScrollToTopButton
          className={b('scroll-to-top')}
        />
      </Suspense>
    </div>
  );
}

export default withTheme(App);
