
import { OL, LI, A, Container} from "./styled"

export const Breadcrumbs = ({ children }) => (
    <Container aria-label="Breadcrumb">
      <OL>{children}</OL>
    </Container>
  );

export const Crumb = ({ isCurrentPage, href, children }) => (
    <LI>
      <A to={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </A>
    </LI>
  );



