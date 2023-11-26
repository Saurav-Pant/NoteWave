"use client"
import { atom, atomFamily, RecoilRoot } from "recoil";

export const likesState = atomFamily<number, string>({
 key: 'likesState',
 default: 0,
});

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
 return <RecoilRoot>{children}</RecoilRoot>;
}
