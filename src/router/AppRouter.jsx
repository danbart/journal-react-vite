import { Route, Routes } from 'react-router'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            {/* login */}
            <Route path='auth/*' element={<AuthRouter />} />
            {/* journal */}
            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
    )
}
